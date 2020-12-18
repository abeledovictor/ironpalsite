import React from 'react'

interface CodePenProps {
  /** The title of the pen */
  title: string,
  /** URL for the pen without trailing slash at the end */
  src: string
}

export default function CodePen(props: CodePenProps) {

  return (
    <iframe
      height="400"
      style={{ width: '100%', maxWidth: 680, alignSelf: 'flex-start', margin: '0 auto' }}
      scrolling="no"
      title={props.title}
      src={`${props.src}?height=265&theme-id=dark&default-tab=js,result`}
      frameBorder="no"
      loading="lazy"
      allowTransparency
      allowFullScreen
    >
      Pen: <a href={props.src}>{props.title}</a> by victor
      (<a href='https://codepen.io/victorabeledo'>@victorabeledo</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
  );
}