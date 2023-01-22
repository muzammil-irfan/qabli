import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Box,
  ButtonBase,
  Select,
  MenuItem
} from '@mui/material';

export default function AdminCommonTable({
 type, body, header, ...props
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const totalPages = body.length / rowsPerPage;
  const pagination = () => {
    const paginationNum = [];
    for (let i = 0; i < totalPages; i++) {
      paginationNum.push(
        <BoxButton
          active={i === page}
          onClick={() => {
            setPage(i);
          }}
        >
          {i + 1}
        </BoxButton>
      );
    }
    return paginationNum;
  };
  if (type === undefined) {
    return (
      <TableContainer component={Box} height="50%" maxHeight="50vh" {...props}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: 'var(--blue-14)' }}>
            <TableRow>
              {header?.map((item, index) => (index === 0 ? (
                <TableCell sx={{ color: 'var(--purple-light)' }}>
                  {item}
                </TableCell>
                ) : (
                  <TableCell
                    align="center"
                    sx={{ color: 'var(--purple-light)' }}
                  >
                    {item}
                  </TableCell>
                )))}
            </TableRow>
          </TableHead>
          <TableBody>
            {body?.map((item, tableIndex) => (
              <TableRow key={tableIndex}>
                {item?.map((row, index) => (
                  <>
                    {index === 0 ? (
                      <TableCell key={index}>{row}</TableCell>
                            ) : (
                              <TableCell align="center" key={index}>{row}</TableCell>
                            )}
                  </>
                        ))}
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return (
    <Box>
      <TableContainer component={Box} height="70%" maxHeight="70vh">
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: 'var(--blue-14)' }}>
            <TableRow>
              {header?.map((item, index) => (index === 0 ? (
                <TableCell sx={{ color: 'var(--purple-light)' }}>
                  {item}
                </TableCell>
                ) : (
                  <TableCell
                    align="center"
                    sx={{ color: 'var(--purple-light)' }}
                  >
                    {item}
                  </TableCell>
                )))}
            </TableRow>
          </TableHead>
          <TableBody>
            {body
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, tableIndex) => (
                <TableRow key={tableIndex}>
                  {item?.map((row, index) => (
                    <>
                      {index === 0 ? (
                        <TableCell key={index}>{row}</TableCell>
                        ) : (
                          <TableCell align="center" key={index}>{row}</TableCell>
                        )}
                    </>
                    ))}
                </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        fontSize="20px"
        fontWeight="bold"
        my={4}
      >
        <Box display="flex" alignItems="center">
          Showing
          <Select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(e.target.value);
              setPage(0);
            }}
            variant="standard"
            sx={{
              width: 60,
              mx: 2,
              fontWeight: 'bolder'
            }}
          >
            <MenuItem value={6}>06</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
          entries
        </Box>
        <Box display="flex">
          <BoxButton
            borderRadius="10px 0px 0px 10px"
            onClick={() => {
              setPage((val) => val - 1);
            }}
            disabled={page === 0}
          >
            Previous
          </BoxButton>
          {pagination() /* it will render pagination number */}
          <BoxButton
            borderRight={1}
            borderRadius="0px 10px 10px 0px"
            onClick={() => {
              setPage((val) => val + 1);
            }}
            disabled={Math.round(totalPages) === page || totalPages < 1}
          >
            Next
          </BoxButton>
        </Box>
      </Box>
    </Box>
  );
}
function BoxButton({
  borderRight,
  onClick,
  children,
  borderRadius,
  active,
  disabled
}) {
  return (
    <ButtonBase disabled={disabled}>
      <Box
        type="submit"
        py={1}
        px={2}
        backgroundColor={
          active === undefined
            ? 'white'
            : active
            ? 'primary.main'
            : 'secondary.main'
        }
        color={active === undefined ? 'black' : 'white'}
        border="1px solid black"
        borderRight={borderRight || '1px'}
        onClick={onClick}
        borderRadius={borderRadius}
        fontWeight={disabled ? '' : 'bold'}
      >
        {children}
      </Box>
    </ButtonBase>
  );
}
