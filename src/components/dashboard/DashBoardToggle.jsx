import { Alert, Button, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';
import { useCallback } from 'react';
import { auth } from '../../misc/firebase';

const DashBoardToggle = () => {
    const { isOpen, open, close } = useModalState()
    const isMobile = useMediaQuery('(max-width:992px)')

    const isSignOut = useCallback(() => {

        auth.signOut()
        Alert.info('Signed out', 4000)
        close()
    }, [close])

    console.log({ isOpen, open, close })
    return (
        <>
            <Button block color='blue' onClick={open}>
                <Icon icon='dashboard' /> Dashboard
            </Button>
            <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
                <Dashboard isSignOut={isSignOut} />
            </Drawer>
        </>
    )
}

export default DashBoardToggle
