// import {useState} from 'react';
// import {Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Alert} from "@mui/material";
// import axios from "axios";
// import { useNavigate  } from 'react-router-dom';
// export default function LoginAdmin({handleLog}) {
//   const [authError, setAuthError] = useState(false);
//   const [resetPassAlert, setResetPassAlert] = useState(false);
//   const [resetPassFailAlert, setResetPassFailAlert] = useState(false);
//   const navigate = useNavigate();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     axios.post('/auth/login',data,{
//                 headers:{
//                     'Content-Type': "multipart/form-data"
//                 }
//             })
//            .then(res =>{
//               if(res.data){
//                 handleLog();
//                 setAuthError(false);
//                 navigate('/admin/palettes');
//               } else {
//                 setAuthError(true);
//               }
//            })
//   };

//   const handleResetPassword = (e) =>{
//     e.preventDefault();
//     axios('/auth/resetpass')
//     .then(res =>{
//       setResetPassAlert(true)
//     })
//     .catch(e =>{
//       console.log(e)
//       setResetPassFailAlert(true);
//     }
//       )
//   }
//   return (

//     <Container component="main" maxWidth="xs">
//     <Box
//       sx={{
//         marginTop: 8,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <Typography component="h1" variant="h1">
//         Авторизация
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="username"
//           label="Логин"
//           name="username"
//           error = {authError}
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Пароль"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           error = {authError}
//         />
//         <FormControlLabel
//           control={<Checkbox value="remember" color="primary"  id="remember"  name="remember" />}
//           label="Запомнить меня"

//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2, backgroundColor:'#C79D5E' }}
//         >
//           Войти
//         </Button>
//         <Grid container>
//           <Grid item xs>
//             <Link href="#" variant="body2" onClick = {handleResetPassword}>
//               Забыл пароль?
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//     {resetPassAlert ? <Alert variant="filled" severity="success" className = 'alert' onClick={() => setResetPassAlert(false)}>Новый пароль отправлен на почту!</Alert> : null}
//     {resetPassFailAlert ? <Alert variant="filled" severity="error" className = 'alert' onClick={() => setResetPassFailAlert(false)}>Произошла ошибка</Alert> : null}
//     </Container>

//   );
// }
