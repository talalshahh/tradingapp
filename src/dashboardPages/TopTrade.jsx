import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

export default function TopTrade() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          { params: { vs_currency: "usd" } }
        );
        console.log(response, "response");
        const data = response.data.map((coin) =>
          createData(
            coin.name,
            coin.image,
            `$${coin.total_volume.toLocaleString()}`
          )
        );
        setRows(data);
      } catch (error) {
        console.error("Error fetching coin data", error);
      }
    };
    fetchData();
  }, []);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root>
      <Header>
        <Title>Top Trade</Title>
        <Label></Label>
      </Header>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Token</th>
            <th>24h Inflow</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.name}>
              <td>
                <img
                  src={row.image}
                  alt={row.name}
                  width="24"
                  height="24"
                  style={{ marginRight: 8 }}
                />
                {row.name}
              </td>
              <td align="right">{row.inflow}</td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 34 * emptyRows }}>
              <td colSpan={2} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[10]}
              colSpan={2}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  "aria-label": "rows per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                  slots: {
                    firstPageIcon: FirstPageRoundedIcon,
                    lastPageIcon: LastPageRoundedIcon,
                    nextPageIcon: ChevronRightRoundedIcon,
                    backPageIcon: ChevronLeftRoundedIcon,
                  },
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}

function createData(name, image, inflow) {
  return { name, image, inflow };
}

const Root = styled("div")`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid #303740;
  overflow: hidden;
  background-color: #1c2025;
  color: #e5eaf2;

  table {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #303740;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #303740;
  }
`;

const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #1c2025;
  border-bottom: 1px solid #303740;
`;

const Title = styled("h2")`
  font-size: 1.25rem;
  color: #f0f7ff;
`;

const Label = styled("button")`
  font-size: 1rem;
  color: #f0f7ff;
  background: none;
  border: none;
  cursor: pointer;
`;

const CustomTablePagination = styled(TablePagination)`
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 4px 0;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select} {
    font-family: "IBM Plex Sans", sans-serif;
    padding: 2px 0 2px 4px;
    border: 1px solid #303740;
    border-radius: 6px;
    background-color: transparent;
    color: #e5eaf2;
    transition: all 100ms ease;

    &:hover {
      background-color: #303740;
      border-color: #434d5b;
    }

    &:focus {
      outline: 3px solid #3399ff;
      border-color: #3399ff;
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    display: flex;
    gap: 6px;
    border: transparent;
    text-align: center;
  }

  & .${classes.actions} > button {
    display: flex;
    align-items: center;
    padding: 0;
    border: transparent;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #303740;
    color: #e5eaf2;
    transition: all 120ms ease;

    > svg {
      font-size: 22px;
    }

    &:hover {
      background-color: #303740;
      border-color: #434d5b;
    }

    &:focus {
      outline: 3px solid #3399ff;
      border-color: #3399ff;
    }

    &:disabled {
      opacity: 0.3;
      &:hover {
        border: 1px solid #303740;
        background-color: transparent;
      }
    }
  }
`;
