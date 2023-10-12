import { Button, Drawer, Icon } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

const DashBoardToggle = () => {
    const { isOpen, open, close } = useModalState()
    console.log({ isOpen, open, close })
    return (
        <>
            <Button block color='blue' onClick={open}>
                <Icon icon='dashboard' /> Dashboard
            </Button>
            <Drawer show={isOpen} onHide={close} placement="left">
                <Dashboard />
            </Drawer>
        </>
    )
}

export default DashBoardToggle