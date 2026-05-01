import { redirect } from 'next/navigation'

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function FrontPageV2Redirect() {
  redirect('/preview/front-page-v2')
}
