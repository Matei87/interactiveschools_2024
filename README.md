#interactiveschools_2024

## Test Requirements

There are 3 sections:

- Hero Area

  ```sh
  - you need to use the following collection:
    https://gist.github.com/danielmtd/4027925144b88e175b53bd0f127f1052
   - its up to you if you want it as json file or inside the js
   - there are 10 items. you need to extract only 3 items randomized
   - if there is no title the slide should not be show
   - if more than 2 lines these needs to be truncated to 2 lines
   - the arrow inside needs to be functional. On click it should scroll down
    to the next section
   - on mobile it should switch to a simple auto rotator fade that its: draggable,
   swipeable (you can use a library for this for the sake of speed)
   - on desktop it should horizontally scroll and pin (these means that the hero
   are needs to be fixed during the scrolling and unfix when its at the end.
   Check the examples). Use gsap with scrolltrigger.
  ```

- Carousel Scroller

  ```sh
  - it needs to bring 10 dummy Json items with: link, image and description
   - its a simple list with items
   - the carousel scroller title needs to stick when the center of the viewport
    hits the top of the first title and unstick when the center of the viewport
    hits the top of the next title location
  ```

- Rotator

  ```sh
    Its formed by 2 parts side by side.
    The right part freely scroll, the left part sticks when the center of the
    viewport hits the first item and unstick when the center of the viewport hits the
    last item

   Requirements:

   - You have to take those items from dummyjson api (left description that rotates,
    right title)
   - The number should rotate
   - The dots needs to be clickable and go to that particular index
   - the text needs to truncate to 1 line (for the sake of simplicity)
   - the right images have a description, title and a link
   - on mobile is just a simple list

   Important note:
   - individual item should rotate. The line that is splitting should not.
  ```

  ```sh
  General must haves:
  - it needs to use a bundler like grunt a gulp. The idea is at the end we want a link
    to the repo, run 2 or 3 commands to install package -> run the server
  - you have to use git (and we need to see the commit history), when you finish the test
    just give us the link repo
  - please avoid to use jQuery (you can load it for the fader plugin but try to avoid it
    if possible on the rest of the widgets)
  - please lazyload images - you can use the lazysizes plugin
  ```

## How to Run

1. Clone the repository:

   ```sh
   git clone https://github.com/Matei87/interactiveschools_2024.git
   cd interactiveschools_2024
   ```

   Open in browser the index.html file or access the deployed project at

   ```sh
   https://matei87.github.io/interactiveschools_2024/app/index.html
   ```

# Gulp Usage

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the application:

   ```sh
   npm run gulp
   ```
