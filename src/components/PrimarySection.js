import {Row} from 'antd'
import styles from '../../styles/Home.module.css'

export function PrimarySection(props){
    return(
        <>
        <Row className={styles.primary_container}>
          <h1 className={styles.primary_container_title} style={{marginLeft: "2vw"}}> {props.title} </h1>
        </Row>
        {
            (props.children) ? props.children : <></>
        }
        </>
    )
}

export function InterSection(props){
    return(
        <>
        <Row className={styles.intersection}>
          <h1 className={styles.primary_container_title} style={{marginLeft: "2vw"}}> {props.title} </h1>
        </Row>
        {
            (props.children) ? props.children : <></>
        }
        </>
    )
}