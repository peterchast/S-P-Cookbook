import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;
    const category = entry.getIn(["data", "category"], null);
    const title = entry.getIn(["data", "title"], null);
    const tagline = entry.getIn(["data", "tagline"], null);

    const tags = entry.getIn(["data", "tags"], null);

    const tag_items = this.props.widgetsFor('tags').map(function(tag, index) {
        return h('li', {key: index}, tag.getIn(['data', '1, 2, 3'])
        );
      });

    const featured_img = entry.getIn(["data", "featured_image"], null);

    const love_items = this.props.widgetsFor('love_list').map(function(love, index) {
        return h('li', {key: index}, love.getIn(['data', 'love_reason'])
        );
      });

    const story = entry.getIn(["data", "story"], null);
    const active_time = entry.getIn(["data", "active_time"], null);
    const total_time = entry.getIn(["data", "total_time"], null);
    const yield1 = entry.getIn(["data", "yield"], null);

    const ingredients_list2 = entry.getIn(["data", "ingredients_list", "ingredient", "amount"], null);

    const instruction_step = this.props.widgetsFor('instructions').map(function(inst, index) {
        return h('li', {key: index},
          h('h3', {}, inst.getIn(['data', 'title'])),
          h('p', {}, inst.getIn(['widgets', 'description'])),
        );
      });

    const special_equipment = this.props.widgetsFor('special_equipment').map(function(equip, index) {
        return h('li', {key: index}, equip.getIn(['data', 'equipment'])
        );
      });

    const other_notes = this.props.widgetsFor('other_notes').map(function(notes, index) {
        return h('li', {key: index}, notes.getIn(['data', 'note'])
        );
      });
    const inspired_by = entry.getIn(["data", "inspired_by"], null);


    return html`

      <main>
        <div class="[ wrapper ] [ flow ]">
          <article>
            <section class="recipe-intro">
              <p>${category}</p>
              <h1 class="recipe-name">${title}</h1>
              <p class="tagline">${tagline}</p>
              <ul>
                ${tag_items}
              </ul>
            </section>

            <section class="recipe-about flow">

              <div class="reasons-why">
                <h2>WHY WE LOVE IT</h2>
                <ul>
                  ${love_items}
                </ul>
              </div>

              <div class="recipe-commentary flow">
                ${story}
              </div>

              <div class="recipe-facts">
                <div class="stats info-box">
                  <div class="stats-time">
                    <span class="label">
                      <p class="smaller-text">Active:</p>
                    </span>
                    <span class="data">
                      <h3>${active_time}</h3>
                    </span>
                  </div>
                </div>
                <div class="stats info-box">
                  <div class="stats-time">
                    <span class="label">
                      <p class="smaller-text">Total:</p>
                      </span>
              <span class="data">
                <h3>${total_time}</h3>
              </span>
            </div>
            </div>
            <div class="stats info-box">
              <div class="stats-yield">
              <span class="label">
                <p class="smaller-text">Yield:</p>
              </span>
              <span class="data">
                <h3>${yield1}</h3>
              </span>
              </div>
            </div>
          </div>

          </section>

          <section class="recipe-ingredients flow">

          <h2 class="section-headline">Ingredients</h2>

          <div>
          ${ingredients_list2}
          </div>


          <p><strong>Special equipment you'll need 🔪🍳:</strong></p>
          <ul>
            ${special_equipment}
          </ul>



          </section>

          <section>
          <h2>Instructions</h2>
          <ol class="step-text">
              ${instruction_step}
          </ol>
          </section>


          <section class="recipe-footer flow sand-bg">
            <div class="recipe-notes flow">
              <h3 class="step-title">More Recipe Notes</h3>
                <ul class="step-text">
                    ${other_notes}
                  <li>
                  <div class="flow inspired-by">
                    <p class="font-mono upper strong deepsea">This recipe was inspired by:</p>
                    ${inspired_by}
              </li>
                </ul>
              </div>
          </section>


        </article>
        </div>
      </main>
    `;
  }
});

export default Post;
