import React, { useState } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch} from 'react-redux';
import { addData} from '../redux/actions/action';
function ShowData() {
     

    const dispatch = useDispatch()

  

    const [data, setData] = useState({
        task: '',
        completed: false
    })

    const eventHandler = (e) => {
        const dataCopy = { ...data }
        dataCopy[e.target.name] = e.target.value
        setData(dataCopy)
    }

    const add = () => {
        if(data.task!==''){
            dispatch(addData(data))
        }
    }

    return (
        <div >
            <Container>
                <Grid container >
                    <Grid item sm={10} pt={15} pl={20}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h3' backgroundColor='#033E3E' color='red' align='center' fontFamily={"Courier New(monospace)"}>Todo App</Typography>
                                    <Box>
                                        <TextField placeholder='Enter your task' fullWidth varient='outlined' margin='normal' label='To Do...' name='task' value={data.task} onChange={(e) => { eventHandler(e) }} />
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{alignItems:'center'}}>
                                <Box mt={2} >
                                    <Button color='success' variant='contained' startIcon={<AddBoxIcon />} onClick={() => { add() }}> Add </Button>
                                </Box>
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default ShowData