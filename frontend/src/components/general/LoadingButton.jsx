import { Box, Button } from '@chakra-ui/react';

const LoadingButton = ({ ...rest }) => {
    return (
        <Box className='flex justify-end'>
            <Button
                isLoading
                borderColor={"#E59C36"}
                textColor={"#E59C36"}
                variant={"outline"}
                spinnerPlacement="end"
                width={"fit"}
                {...rest}
            >
                loading
            </Button>
        </Box>

    )
}

export default LoadingButton