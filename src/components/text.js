const DisplayText = ({text}) => {
    return text + " Reversed =" + text.split("").reverse().join("")
}