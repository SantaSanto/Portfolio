import React from 'react'

import { Formik, Form } from 'formik'

import { NumberInput, DateInput } from '../form/Input'
import SelectInput from '../form/Select'
import { Button, DeleteButton } from '../form/Button'
import GroupFields from '../form/GroupFields'

import { TXN_TYPE } from './TxnConfig'

export const TxnForm = (props) => {
    const { editMode, deleteMode, txn, onSubmit, onDelete } = props
    const editButtonLabel   = (editMode)?   "Update" : "Save"
    const deleteButtonLabel = (deleteMode)? "Confirm" : "Delete"
    return (
        <Formik enableReinitialize initialValues={txn} onSubmit={onSubmit} >
            <Form>
                <GroupFields>
                    <DateInput label="Date" name="date" />
                    <SelectInput label="Type" name="type" data={TXN_TYPE} />
                </GroupFields>

                <NumberInput label="Amount" name="amount" />

                <GroupFields>
                    <Button label={editButtonLabel} />
                    <DeleteButton type="button" label={deleteButtonLabel} onClick={onDelete}/>
                </GroupFields>
            </Form >
        </Formik>
    )
}