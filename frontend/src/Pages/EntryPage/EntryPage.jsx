import { Button } from '../../Components/Button/Button'
import { PageHeaderText } from '../../Components/PageHeaderText/PageHeaderText'
import { TextWrapper } from '../../Components/TextWrapper/TextWrapper'

export const EntryPage = ({EntryText,ButtonTypes }) => {
    return (
        <div className='entryPage'>
            <TextWrapper>
                {
                    EntryText.map((props, i) => (
                        <PageHeaderText props={props} key={i} />
                    ))
                }

            </TextWrapper>
            {
                ButtonTypes.map(({ bgColor, type, url }, i) => (
                    <Button key={i} bgColor={bgColor} btnText={type} url={url} />
                ))
            }
        </div>
    )
}
