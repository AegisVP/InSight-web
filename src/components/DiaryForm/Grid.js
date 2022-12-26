import styled from 'styled-components';
//import { gridTemplateAreas } from 'styled-system';

export const DiaryPageAreas = styled.div`
    display: grid;
    grid-template-areas: 'form '
                        'calculate'
    ;
    //width: 320px;
    grid-template-columns: 1fr;
    @media screen and (min-width: 768px) {
       // min-width: 768px;
        }
    @media screen and (min-width: 1280px) {
        width: 1280px;
        grid-template-columns: 2fr 1fr;
        grid-template-areas: 'form calculate'
                            'form calculate';
        
}`



