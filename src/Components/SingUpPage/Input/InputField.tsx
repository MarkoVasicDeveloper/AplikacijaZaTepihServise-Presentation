import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InputField.css';

interface InputParam {
    icon: any,
    value: any,
    onChange: (e:any) => void,
    text: string,
    type?: string
}

export default function InputField({icon, value, onChange, text, type = 'text'} : InputParam) {
    return (
        <div className="inputContainer">
            <div>
                <FontAwesomeIcon icon={icon} />
            </div>
            <input
                type = {type}
                placeholder = {text}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}