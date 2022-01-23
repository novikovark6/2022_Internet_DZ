import React, {useState} from 'react';
import SecondService from "../../API/Second";
import classes from "../FormEdit/FormEdit.module.css";
import {first_form_first, first_form_second, second_form_first} from "../../constants";
import Input from "../Input/Input";
import Button from "../Button/Button";
import FirstService from "../../API/First";

const FormEditFirst = (props) => {
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    async function add() {
        const req_data = {
            full_name: first,
            price: second
        }
        await FirstService.edit(props.id, req_data)
        const data = await FirstService.GetFirstList()
        props.setItemList(data)
        props.setModalVisible(false)
    }
    return (
        <div className={classes.container}>
            <header>Введите {first_form_first}</header>
            <Input onChange={(e) => {setFirst(e.target.value)}}/>
            <header>Введите {first_form_second}</header>
            <Input onChange={(e) => {setSecond(e.target.value)}}/>
            <div className={classes.buttonContainer}>
                <Button name={"Сохранить"} onClick={() => {add()}}/>
                <Button name={"Закрыть"} onClick={() => {props.setModalVisible(false)}}/>
            </div>
        </div>
    );
};

export default FormEditFirst;
