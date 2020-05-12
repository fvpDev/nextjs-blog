import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

export default function AmpPage() {
  const isAmp = useAmp()
  const date = new Date()

  return (
    <div>
      {isAmp ? (
        <amp-timeago
          width="0"
          height="15"
          datetime={date.toJSON()}
          layout="responsive"
        >
          .
        </amp-timeago>
      ) : (
        <p>Some time: {date.toJSON()}</p>
      )}
    </div>
  )
}
