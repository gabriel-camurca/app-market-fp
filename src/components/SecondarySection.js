import {Row} from 'antd'
import styles from '../../styles/Home.module.css'

export function SecondarySection(props){
    return(
        <>
            <Row className={styles.secondary_container}>
                <h1 className={styles.secondary_container_subtitle}>
                Ever wondered how many Apps for each 0-5 Star Rating? <br/>
                This is a chart of the different App Ratings for each category!<br/>
                </h1>
                {
                    (props.children) ? props.children : <></>
                }
            </Row>
        </>
    )
}