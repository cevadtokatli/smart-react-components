import React from "react"
import renderTheme from "../test/renderTheme"
import Container from "./Container"
import Table from "./Table"
import Thead from "./Thead"
import Tbody from "./Tbody"
import Tfoot from "./Tfoot"
import Tr from "./Tr"
import Th from "./Th"
import Td from "./Td"

describe("<Container />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(
            <Container>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Thead-1</Th>
                            <Th>Thead-2</Th>
                            <Th>Thead-3</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Tbody-1-1</Td>
                            <Td>Tbody-1-2</Td>
                            <Td>Tbody-1-3</Td>
                        </Tr>
                        <Tr>
                            <Td>Tbody-2-1</Td>
                            <Td>Tbody-2-2</Td>
                            <Td>Tbody-2-3</Td>
                        </Tr>
                        <Tr>
                            <Td>Tbody-3-1</Td>
                            <Td>Tbody-3-2</Td>
                            <Td>Tbody-3-3</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Td>Tfoot-1</Td>
                            <Td>Tfoot-2</Td>
                            <Td>Tfoot-3</Td>
                        </Tr>
                    </Tfoot>
                </Table>
            </Container>
        )
        expect(wrapper).toMatchSnapshot()
    })
})