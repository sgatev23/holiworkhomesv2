import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import supabase from '../supabaseclient'

export default function JobApplicationPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [coverLetterText, setCoverLetterText] = useState('')
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sanitizeFileName = (filename: string) =>
    filename.replace(/[^a-zA-Z0-9.\-_]/g, '_')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resumeFile || !name || !email || !slug) {
      setError('Please fill out all required fields.')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const timestamp = Date.now()
      const resumeKey = `resumes/${slug}-${timestamp}-${sanitizeFileName(resumeFile.name)}`
      const { error: resumeError } = await supabase.storage
        .from('resumes')
        .upload(resumeKey, resumeFile)

      if (resumeError) throw resumeError

      let coverLetterKey: string | null = null
      if (coverLetterFile) {
        coverLetterKey = `resumes/${slug}-${timestamp}-${sanitizeFileName(coverLetterFile.name)}`
        const { error: coverError } = await supabase.storage
          .from('resumes')
          .upload(coverLetterKey, coverLetterFile)
        if (coverError) throw coverError
      }

      const { error: insertError } = await supabase.from('resumes').insert([
        {
          name,
          email,
          slug,
          resume_path: resumeKey,
          cover_letter_text: coverLetterText || null,
          cover_letter_file_path: coverLetterFile ? coverLetterKey : null,
        },
      ])

      if (insertError) throw insertError

      navigate('/thank-you')
    } catch (error: any) {
      console.error('Submission error:', error)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Apply for {slug?.replace(/-/g, ' ')}</h1>
      <p className="text-gray-600 mb-8">Tell us a bit about yourself and why you’d be a great fit.</p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Upload Resume (PDF or DOCX)</label>
          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Cover Letter (optional)</label>
          <textarea
            value={coverLetterText}
            onChange={(e) => setCoverLetterText(e.target.value)}
            maxLength={1500}
            className="w-full border px-3 py-2 rounded min-h-[120px]"
            placeholder="Or upload a file below."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Upload Cover Letter (optional)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCoverLetterFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#815159] text-white px-6 py-3 rounded-md hover:bg-[#6f4749] transition w-full disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        We’ll be in touch if your profile matches our needs.
      </p>
    </div>
  )
}
