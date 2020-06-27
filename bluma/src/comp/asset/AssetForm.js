import React from 'react'

import { Formik, Form } from 'formik'

import { TextInput, DateInput } from '../form/Input'
import SelectInput from '../form/Select'
import { Button } from '../form/Button'
import GroupFields from '../form/GroupFields'

import { ASSET_TYPE, PORTFOLIO, ASSET_INSTITUTION, ASSET_HOLDER } from '../asset/AssetConfig'

export const AssetForm = (props) => {
    const { editMode, asset, onSubmit } = props
    const ButtonLabel = (editMode)? "Update" : "Save"
    return (
        <Formik enableReinitialize initialValues={asset} onSubmit={onSubmit} >
            <Form>
                <TextInput label="Name" name="name" />
                <SelectInput label="Type" name="type" data={ASSET_TYPE} />
                <SelectInput disabled={!editMode} label="Folio" name="folioId" data={PORTFOLIO} />

                <GroupFields>
                    <SelectInput label="Institution" name="institution" data={ASSET_INSTITUTION} />
                    <SelectInput label="Holder" name="holder" data={ASSET_HOLDER} />
                </GroupFields>

                <GroupFields>
                    <DateInput label="Start Date" name="startDate" />
                    <DateInput label="End Date" name="endDate" />
                </GroupFields>

                <Button label={ButtonLabel} />
            </Form >
        </Formik>
    )
}