import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({root:{width:'100%'}}));

export default function ToDoForm(props){
	
	const classes = useStyles();
	
	const [input, setInput] = useState('')
	
	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log('hello');
		setInput('');
	}
	return (
		<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
			<TextField value={input} onChange={(e)=> setInput(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
		</form>
	);
}