import { Button, Col, Container, Grid, Icon, Panel, Row, Alert } from "rsuite"
import firebase from "firebase/app"
import { auth, database } from "../misc/firebase"

const SignIn = () => {

    const signInProvider = async provider => {

        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider)

            if (additionalUserInfo.isNewUser) {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                })
            }

            Alert.success('Signed in', 4000)

        }
        catch (err) {
            Alert.error(err.message, 4000)
        }

    }

    const onFacebookLogin = () => {
        signInProvider(new firebase.auth.FacebookAuthProvider())
    }

    const onGoogleLogin = () => {
        signInProvider(new firebase.auth.GoogleAuthProvider())
    }
    return <Container>
        <Grid className="mt-page">
            <Row>
                <Col xs={24} md={12} mdOffset={6}>
                    <Panel>
                        <div className="text-center">
                            <h2>Welcome to Chat</h2>
                            <p>Progressive chat platform for neophytes</p>
                        </div>
                        <div className="mt-3">
                            <Button block color="blue" onClick={onFacebookLogin}>
                                <Icon icon="facebook" /> Connect to facebook
                            </Button>
                            <Button block color="green" onClick={onGoogleLogin}>
                                <Icon icon="google" /> Connect to google
                            </Button>
                        </div>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    </Container>
}

export default SignIn