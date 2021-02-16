import React from 'react';
import Navbar from '../elements/basic/Navbar';
import Form from '../elements/basic/Form';
import Button from '../elements/basic/Button';
import Alert from '../elements/basic/Alert';
import Badge from '../elements/basic/Badge';
import List from '../elements/basic/List';
import Card from '../elements/basic/Card';
import Grid from '../elements/basic/Grid';



const Basic = () => {

    return (
        <div className="container">
            <h1 className="mb-5">Basic</h1>

            <Grid />
            <Navbar />
            <Button />
            <Form />
            <Alert />
            <Badge />
            <List />
            <Card />
    


        </div>
    )
}

export default Basic;