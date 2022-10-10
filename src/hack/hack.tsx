import { CategoryData } from "./category.js"

const hacks: CategoryData[] = []

const config = CHEATMENUCONFIG

config.categories.forEach((e: string) => {
    hacks.push({
        categoryTitle: e,
        hacks: []
    })
})

export const withCategory = (category: string, func: (ctx: CategoryContext) => void): void => {
    const categoryData = hacks.find(e => e.categoryTitle === category)
    if (categoryData != null) {
        const ctx: CategoryContext = {
            hack: (title, description, func) => {
                categoryData.hacks.push({
                    name: title,
                    description,
                    handler: func,
                    type: "hack"
                })
            },
            toggle: (title, func) => {
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                categoryData.hacks.push({
                    name: title,
                    handler: func,
                    type: "toggle"
                } as StoredHackData<"toggle">)
            },
            shouldShow: (func) => {
                categoryData.shouldShow = func
            }
        }
        func(ctx)
    } else {
        throw new Error(`Category ${category} does not exist`)
    }
}

export interface CategoryContext {
    hack: (title: string, description: string, func: Handler<"hack">) => void
    toggle: (title: string, func: Handler<"toggle">) => void
    shouldShow: (func: () => boolean) => void
}

export interface StoredHackData<T = "hack" | "toggle"> {
    type: T
    handler: Handler<T>
    name: string
    description: T extends "hack" ? string : undefined
}

export type Handler<T = "hack" | "toggle"> = T extends "hack" ? () => void | Promise<void> : (toggled: boolean) => void | Promise<void>

export default hacks
