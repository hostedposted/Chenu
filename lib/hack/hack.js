const hacks = [];
const config = CHEATMENUCONFIG;
config.categories.forEach((e) => {
    hacks.push({
        categoryTitle: e,
        hacks: []
    });
});
export const withCategory = (category, func) => {
    const categoryData = hacks.find(e => e.categoryTitle === category);
    if (categoryData != null) {
        const ctx = {
            hack: (title, description, func) => {
                categoryData.hacks.push({
                    name: title,
                    description,
                    handler: func,
                    type: "hack"
                });
            },
            toggle: (title, func) => {
                categoryData.hacks.push({
                    name: title,
                    handler: func,
                    type: "toggle"
                });
            },
            shouldShow: (func) => {
                categoryData.shouldShow = func;
            }
        };
        func(ctx);
    }
    else {
        throw new Error(`Category ${category} does not exist`);
    }
};
export default hacks;
