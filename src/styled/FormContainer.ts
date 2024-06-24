import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const FormContainer = styled(Container)({
    // Positioning
    'position': 'absolute',
    'left': '50%',
    'top': '50%',
    '-webkit-transform': 'translate(-50%, -50%)',
    'transform': 'translate(-50%, -50%)',
    // Alingment and placement
    'padding': '3rem 6rem 1.5rem 6rem',
    'borderRadius': 4,
    'display': 'flex',
    'flexDirection': 'column',
    'gap': '1.5rem',
    // Color
    'color': 'darkslategray',
    'backgroundColor': 'aliceblue',

    'h3': {
        'fontSize': '1rem',
        'fontWeight': '700'
    },

    '& .form-actions': {
        'display': 'flex',
        'gap': '1rem',
        'justifyContent': 'flex-end',
    }
});