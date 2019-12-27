module.exports = {
    drawData: function (data, container) {

        let colElements = '';

        if (data.length){
            data.forEach(element => {

                /** Destructuring the element object for the necessary fields */
                let {id, name, required_level, tags, price} = element;

                /** Converting the array of tags into a string*/
                tags = tags.toString();
                tags = tags.replace(/_/g, " ");

                colElements += `<article class="col">
                <figure>
                    <img src="/images/${id}.png" alt="${name}" aria-hidden="true">
                    <figcaption>Potion ${id}: ${name}</figcaption>
                </figure>
                <div>
                    <p class="potion-name">${name}</p>
                    <p class="required-level"><span>Required level:</span> ${required_level}</p>
                    <p class="tags"><span>Tags:</span> ${tags}</p>
                    <div class="price"><span class="float-left">Price</span> <span class="float-right">${price} &euro;</span></div>
                </div>
            </article>`;
            });

        }
        else{
            colElements = "<h4>There are no potions based on your filters!</h4>";
        }


        container.innerHTML = colElements;
    },

    orderBy: function (jsonData, order) {
        switch (order) {
            case 'name':
                return jsonData.sort((a, b) => (a.name > b.name) ? 1 : -1);
            case 'tags':
                return jsonData.sort((a, b) => (a.tags > b.tags) ? 1 : -1);
            case 'price':
                return jsonData.sort((a, b) => (a.price > b.price) ? 1 : -1);
            case 'required_level':
                return jsonData.sort((a, b) => (a.required_level > b.required_level) ? 1 : -1);
            default:
                return jsonData.sort((a, b) => (a.name > b.name) ? 1 : -1);
        }
    }
};