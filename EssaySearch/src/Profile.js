/**
 *  File name     :  Profile.js
 *  @author       :  Warren Lee
 *  Date          :  4/23/20
 *  Description   :  EssaySearch
 */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import firebase from './firebase';

export default class Profile extends React.Component{
    render() {
        return ( 
            <div style = {{backgroundColor: "#e8e8e8", height: "100%",position: "absolute",left: "0",width: "100%",overflow: "scroll"}}>
                <Card style = {{ height: "40%", marginLeft: "21.25%", marginRight:"21.25%", marginTop: "1%", marginBottom: "1%", }}>
                    <CardContent>
                        <div style = {{display:"flex", flexDirection:"row",}}>
                            <img style = {{width: "17%", height: "17%", borderRadius: "50%", marginTop: "5%", marginLeft:"3%",}} src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt = "profile"/>
                            <div style = {{ marginTop: "5%", width: "100%",}}>
                                <Typography style = {{marginLeft: "10%", fontWeight: "bold", fontSize: 32, }}>{firebase.auth().currentUser.displayName}</Typography>
                                <Typography style = {{marginLeft: "10%", fontSize: 20,marginTop: "4%"}}>Username: </Typography>
                                <Typography style = {{marginLeft: "10%", fontSize: 20, fontWeight:"bold"}}>{firebase.auth().currentUser.username} </Typography>
                                <Typography style = {{marginLeft: "10%", fontSize: 20,marginTop: "4%"}}>Email: </Typography>
                                <Typography style = {{marginLeft: "10%", fontSize: 20, fontStyle: "italic"}}>{firebase.auth().currentUser.email}</Typography>
                                <Divider style = {{marginLeft: "10%", marginTop: "8%", width: "75%"}}/>
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style = {{marginRight: "8%", marginTop: "6%", height: "50%", width: "16%"}}
                                onClick = {() => {
                                    this.props.changeLoggedIn(false);
                                    firebase.auth().signOut();
                                    console.log("signed out")
                                }}
                                >
                                Sign Out
                            </Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
        )
    }
}