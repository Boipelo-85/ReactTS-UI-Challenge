// Props initialization
type Props = {

        children : React.ReactNode
        className? : string
}

/** Wraps its children in a content area with consistent sizing and optional styling. */
export const ContentContainer: React.FC<Props> = ( {children, className}) => {
  return (

    <div className={className} style={{maxWidth: '1200px',padding:' 10px'}}>
                {children}

    </div>
  )
}
