import { Button, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

const DashBoardToggle = () => {
    const { isOpen, open, close } = useModalState()
    const isMobile = useMediaQuery('(max-width:992px)')

    console.log({ isOpen, open, close })
    return (
        <>
            <Button block color='blue' onClick={open}>
                <Icon icon='dashboard' /> Dashboard
            </Button>
            <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
                <Dashboard />
            </Drawer>
        </>
    )
}

export default DashBoardToggle
