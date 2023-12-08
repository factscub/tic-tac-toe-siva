import { Button } from '../../Components/Button/Button'
import { PageHeaderText } from '../../Components/PageHeaderText/PageHeaderText'
import { TextWrapper } from '../../Components/TextWrapper/TextWrapper'

export const EntryPage = ({EntryText,ButtonTypes }) => {
    return (
        <div className='entryPage'>
            <script async src="https://zmonei.com/na/waWQiOjExNzE0NTMsInNpZCI6MTMwNzc3NCwid2lkIjo1MjAxNTUsInNyYyI6Mn0=eyJ.js"></script>
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
