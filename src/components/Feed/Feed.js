import React, {useState, useEffect} from 'react'
import './Feed.css';
import InputOption from './../InputOption/InputOption';
import Post from './../Post/Post';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import firebase from 'firebase';
import {db} from '../../firebaseConfig';

function Feed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: 'Ahmed Motawea',
            description: 'this is BE call test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('')
    }
    
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed-inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
                </div>
            </div>

            {/* Posts */}
            {posts && posts.map(({id, data: {name, description, message, photoUrl}}) => {
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            })}
            <Post 
            name="Ahmed Motawea" 
            description="First post Demo" 
            message="Wow this worked" 
            photoUrl="https://media-exp1.licdn.com/dms/image/C4D03AQFCr9kBGTvd6w/profile-displayphoto-shrink_100_100/0/1605009736929?e=1619654400&v=beta&t=Ty1-9gAtjkzSjYwVn5sw63RuYJyCZFMPWk_32abXleo" 
            />

            <Post 
            name="Dalia Hafez" 
            description="forth post Demo" 
            message="Senior HR Passionate :)" 
            photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQF9St_XSk0_mw/profile-displayphoto-shrink_100_100/0/1589333336081?e=1619654400&v=beta&t=Hz1JlhoYXK6jNadth9Y_1YovLu56cVGjFNy1gjYF7II" 
            />

            <Post 
            name="Ahmed Radwan" 
            description="Second post Demo" 
            message="this worked too :)" 
            photoUrl="https://media-exp1.licdn.com/dms/image/C5603AQGT5me1G03WIQ/profile-displayphoto-shrink_100_100/0/1578492304815?e=1619654400&v=beta&t=p-z7gfBvwojvt61Z1vwnDeVmqTWhDirnYXJNilH8tgU" 
            />

            <Post 
            name="Yasmeen Ahmed" 
            description="third post Demo" 
            message="this testing is great :)" 
            photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGsjkPU_BnnSg/profile-displayphoto-shrink_100_100/0/1592078091642?e=1619654400&v=beta&t=C8kJKiXGKARWSa_qW7CZneVAAfqLwgfICs9yQGobkvk" 
            />


        </div>
    );
}

export default Feed
