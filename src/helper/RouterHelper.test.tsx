import RouterHelper from "./RouterHelper"

describe("RouterHelper", () => {
    it("should set url by fullpath", () => {
        expect(RouterHelper.setUrl("/page?key=value#hash")).toEqual({
            pathname: "/page",
            search: "key=value",
            fullpath: "/page?key=value#hash",
            params: ["", "page"],
            query: {
                key: "value"
            },
        })
    })

    it("should match path with url pathname", () => {
        expect(RouterHelper.matchPath("/1", {}, {path:"/:id",exact:true,searchKeys:null})).toEqual({
            isExact: true,
            key: JSON.stringify({
                matchKey: {
                    id: "1"
                },
                searchKey: {}
            }),
            params: {
                id: "1",
            },
            path: "/:id",
            url: "/1"
        })
    })
})