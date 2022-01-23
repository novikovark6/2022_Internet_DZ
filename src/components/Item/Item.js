import React, {useEffect, useState} from 'react';
import classes from './Item.module.css'
import FirstService from "../../API/First";
import SecondService from "../../API/Second";
import SecondItemList from "../SecondItemList/SecondItemList";
import {secondName} from "../../constants";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import FormAddItem from "../FormAddItem/FormAddItem";
import FormEdit from "../FormEdit/FormEdit";
import FormEditFirst from "../FormEditFirst/FormEditFirst";
import edit from "../../images/edit.svg";

const Item = (props) => {
    const [secondItems, setSecondItems] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const data = await SecondService.list(props.id);
            setSecondItems(data);
        }
        fetchData();
    }, []);
    async function del() {
        await FirstService.del(props.id)
        const data = await FirstService.GetFirstList()
        props.setSecondItemList(data)
    }
    return (
        <div className={classes.tmTasklist}><br/>
            <div className={classes.itemHeader}>{props.body.full_name}</div>
            <div className={classes.info}>
                {props.body.price} рублей<br/>
                <img className={classes.icon} onClick={() => {setModalVisible(true)}} src={edit} width={20} height={20}/>
            </div>
            <SecondItemList index={props.index} firstItems={props.firstItems} setSecondItemList={props.setSecondItemList} setItems={setSecondItems} id={props.id} setSecondModalVisible={props.setSecondModalVisible} setItemId={props.setItemId} items={secondItems}/>
            <div className={classes.del}>
                <Button name={"Удалить"} onClick={del}/>
            </div>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <FormEditFirst setItemList={props.setSecondItemList} id={props.id} visible={modalVisible} setModalVisible={setModalVisible}/>
            </Modal>
        </div>
    );
};

export default Item;
