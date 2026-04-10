import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

interface CVDownloadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function CVDownloadDialog({ open, onOpenChange }: CVDownloadDialogProps) {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const handleDownload = async () => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Looks like a tiny typo \n mind checking it once more? :)')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('http://localhost:3000/api/cv-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email || null }),
      })

      if (!res.ok) throw new Error('Failed to download')

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Shunlong_Dai_CV.pdf'
      a.click()
      window.URL.revokeObjectURL(url)

      onOpenChange(false)
      setEmail('')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-[3px] border-black dark:border-white rounded-none shadow-[8px_8px_0px_0px_black] dark:shadow-[8px_8px_0px_0px_white] bg-white dark:bg-black p-8 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white">
            Download CV<span className="text-[#F24405]">.</span>
          </DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-1 font-mono">
              <span className="text-sm text-black/80 dark:text-white/80">Drop your email, it helps more than you think!</span><br />
              <span className="text-xs text-black/40 dark:text-white/40">Optional. No spam. Not a subscription.</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-4">
          <input
            type="email"
            placeholder="your@email.com (optional)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border-[3px] border-black dark:border-white bg-transparent px-4 py-3 text-sm font-mono text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 outline-none focus:border-[#F24405]"
          />

          {error && (
            <p className="text-sm font-mono text-red-500 whitespace-pre-line">{error}</p>
          )}

          <button
            onClick={handleDownload}
            disabled={loading}
            className="bg-[#F24405] text-white font-black uppercase tracking-widest border-[3px] border-black dark:border-white py-3 text-sm shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-[2px] transition-all duration-100 disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? 'DOWNLOADING...' : 'DOWNLOAD'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CVDownloadDialog
