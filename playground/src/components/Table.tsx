import React from 'react'
import Table from '@smart-react-components/ui/Table'
import TableContainer from '@smart-react-components/ui/Table/TableContainer'
import Tr from '@smart-react-components/ui/Table/Tr'
import Td from '@smart-react-components/ui/Table/Td'
import CloseIcon from '@smart-react-components/ui/Alert/AlertCloseIcon'

export const TableC = () => {
  return (
    <TableContainer stickyY={1} stickyX={1} height="100%">
      <Table hasBorderX hasHeadBackground stripedOrientation="even" maxHeight="100%">
        <thead>
          <tr>
            <th style={{ minWidth: 500 }}>Name</th>
            <th style={{ minWidth: 350 }}>Test</th>
          </tr>
        </thead>
        <tbody>
          {
            [
              { name: 'John Doe', tests: [72, 65] },
              { name: 'Jane Doe', tests: [80, 40, 53] },
              { name: 'Stan Marsh', tests: [55, 92] },
              { name: 'Eric Cartman', tests: [13, 66] },
              { name: 'Tupperware', tests: [88, 47] },
              { name: 'Dylan Oconnor', tests: [22, 34, 28] },
              { name: 'Me Crap', tests: [100, 84] },
              { name: 'Mintberry Crunch', tests: [64, 77, 32] },
            ].map(i => (
              <React.Fragment key={i.name}>
                <tr>
                  <Td rowSpan={i.tests.length + 1} verticalAlign="top">{i.name}</Td>
                </tr>
                {
                  i.tests.map(j => (
                    <tr key={j}>
                      <Td display="none" />
                      <td>{j}</td>
                    </tr>
                  ))
                }
              </React.Fragment>
            ))
          }
        </tbody>
      </Table>
    </TableContainer>
  )
}
