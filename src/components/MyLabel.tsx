import './MyLabel.css'


interface Props {
    /**
    *Text to display
    */
    label: string
    /**
    * Choose the font size
    * 'normal' | 'h1' | 'h2' | 'h3'
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3'
    /**
    * Choose the color
    * 'text-primary' |'text-secondary' |'text-tertiary'
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
    /**
    * Capitalize all letters
    */
    allCaps?: boolean
    /**
     * Change label color
     */
    fontColor?: string

}

// allCaps boolean
//  color 'text-primary' |'text-secondary' |'text-tertiary'
// fontColor string

export const MyLabel = ({ label, size = 'normal', allCaps, color = 'text-primary', fontColor, }: Props) => {
    return (
        <span
            className={`${size} ${color} label`}
            style={{ color: fontColor }}
        >{allCaps ? label.toUpperCase() : label}</span>
    )
}
