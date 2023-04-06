import {
  Container, Pagination, Stack,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { changeStartPage } from '../../store/slices/filterSlices';

function Pagin() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.catalog.pageQuantity);
  const showPage = useSelector((state) => state.filter.filter.startPage);
  // console.log(showPage);

  return (

    <Container
      maxWidth="md"
      sx={{
        marginBlock: '15px',
      }}
    >
      <Stack>
        {!!(pages - 1) && (
        // <ThemeProvider theme={theme}>
          <Pagination
            // className={style.pag}
            // variant="outlined"
            // bgcolor="primary"
            count={pages}
            page={showPage}
            onChange={(e, num) => dispatch(changeStartPage(num))}

          />
        // </ThemeProvider>
        )}
      </Stack>

    </Container>

  );
}
export default Pagin;
