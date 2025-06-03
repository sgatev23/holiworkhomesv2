import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import supabase from '../supabaseclient'
import Layout from '../components/layout/Layout'
import { Loader2, UploadCloud, FileText } from 'lucide-react'

export default function JobApplicationPage() {
  const { slug } = useParams()
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [coverLetterText, setCoverLetterText] = useState('')
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sanitizeFileName = (filename: string) =>
    filename.replace(/[^a-zA-Z0-9.\-_]/g, '_')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resumeFile || !name || !email || !city || !slug) {
      setError(t('form.errorRequired'))
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

      const { error: insertError } = await supabase.from('applications').insert([
        {
          position_title: slug,
          name,
          email,
          linkedin_url: linkedinUrl || null,
          city,
          cover_letter_text: coverLetterText || null,
          resume_url: resumeKey,
          cover_letter_file: coverLetterFile ? coverLetterKey : null,
          created_at: new Date().toISOString(),
        },
      ])

      if (insertError) throw insertError

      setSubmitted(true)
    } catch (error: any) {
      console.error('Submission error:', JSON.stringify(error, null, 2))
      setError(t('form.errorGeneric'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div
        className="relative h-80 bg-center bg-cover flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-2">{t('form.applyFor')} {slug}</h1>
          <p className="text-lg">{t('form.intro')}</p>
        </div>
      </div>

      {/* Form or Confirmation */}
      {submitted ? (
        <div className="bg-[#fff8e1] py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-md border border-[#f1e6c5]">
            <h2 className="text-3xl font-bold text-[#815159] mb-4">{t('form.confirmTitle')}</h2>
            <p className="text-gray-700 text-lg">{t('form.confirmMessage')}</p>
          </div>
        </div>
      ) : (
        <div className="bg-[#fff8e1] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-md border border-[#f1e6c5]">
            <p className="text-gray-600 text-center mb-8 text-lg">{t('form.intro')}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">{t('form.name')}*</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">{t('form.email')}*</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">{t('form.city')}*</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">{t('form.linkedin')}</label>
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <UploadCloud className="w-5 h-5 text-[#815159]" /> {t('form.resume')}*
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                  className="mt-2 w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#815159]" /> {t('form.coverLetter')}
                </label>
                <textarea
                  value={coverLetterText}
                  onChange={(e) => setCoverLetterText(e.target.value)}
                  maxLength={2000}
                  placeholder={t('form.coverLetterHint')}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm min-h-[120px]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">{t('form.coverLetterUpload')}</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setCoverLetterFile(e.target.files?.[0] || null)}
                  className="mt-2 w-full"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#815159] text-white w-full py-3 rounded-lg font-semibold text-lg hover:bg-[#6e444b] transition disabled:opacity-50 flex justify-center items-center"
              >
                {isSubmitting ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : null}
                {isSubmitting ? t('form.sending') : t('form.submit')}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              {t('form.thankYouNote')}
            </p>
          </div>
        </div>
      )}
    </Layout>
  )
}
