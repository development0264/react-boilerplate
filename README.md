# Getting Started with This Boilerplate

This Boilerplate contains a react app with typescript , MUI , ReduxSaga.
All the required Basic Components are provided with this Boilerplate.

## Project Structure

- public
- src
  - [Assets](#asstes)
  - [Components](#components)
    - [Header Component](#header-component)
    - [Side Panel Component](#side-panel-component)
    - [UI](#ui)
      - [Confirm Modal](#confirm-modal)
      - [Loader](#loader)
      - [Modal](#modal)
      - [Panel](#panel)
      - [Select Box](#select-box)
      - [Text Box](#text-box)
      - [Toast](#toast)
      - [ToolTip](#tooltip)
  - [Containers](#containers)
    - [Layout Container](#layout-container)
  - [Helpers](#helpers)
  - [HOC](#HOC)
  - [Redux](#Redux)
    - [Actions](#actions)
    - [Reducers](#reducers)
    - [Sagas](#sagas)
  - [Routes](#routes)
  - [Utils](#utils)
  - [Views](#views)
  - [App.tsx](src/App.tsx)
  - [axiosConfig.ts](src/axiosConfig.ts)
  - [index.css](src/index.css)
  - [index.tsx](src/index.tsx)
  - [store.ts](src/store.ts)
  - [theme.ts](src/theme.ts)

> The above links will take you to the co-responding sections.

## Asstes

**This folder contains all the assets of the project like Images,icons etc.**

## Components

**This Folder contains all the components of the project.**

- ### `Header Component`

  - The header showing on the App is comes from this Folder

- ### `Side Panel Component`

  - The Navmenu showing on the App is comes from this Folder

- ## UI

  - **This Folder contains the UI components like [Panel](#panel),[Modal](#modal) etc.**
  - ### [Confirm Modal](src/Components/UI/ConfirmModal/index.tsx)

    This is a simple modal which will just ask the user about something to confirm.\
    for example :- get confirmation on delete

  - ### [Loader](src/Components/UI/Loader/index.tsx)

    This loader will rotate the image passed here.\
    you can change it as you needed.

  - ### [Modal](src/Components/UI/Modal/index.tsx)

    This is a common modal component which is useful for getting user input and all other needs.\
    The Confirm Modal is dependent of this modal

  - ### [Panel](src/Components/UI/Panel/index.tsx)

    This component is core in this boilerplate,\
    because all pages are created within this component.v

  - ### [Select Box](src/Components/UI/SelectBox/index.tsx)

    This Component will display's a dropdown.

  - ### [Text Box](src/Components/UI/TextBox/index.tsx)

    This is custom textbox component.

  - ### [Toast](src/Components/UI/Toast/index.tsx)

    This is Toast component which is already define in app.tsx file\
    And this component will manage by [ToastReducer](src/Redux/Reducers/ToastReducer.ts),[ToastAction](src/Redux/Actions/ToastAction.ts),[ToastSaga](src/Redux/Sagas/ToastSaga.ts).

  - ### [ToolTip](src/Components/UI/ToolTip/index.tsx)

    This is Custom tooltip.

- ## Containers

  **This folder contains all the containers of the project**

  - ### [Layout Container](src/Containers/LayoutContainer/index.tsx)
    This is main layout container of the app.\
    which will gives you a view with header,sidebar and responsiveness\
    > only made changes in this component if it's required.

- ## Helpers

  All the helper functions should declare here.

- ## HOC

  This Folder containes a Higher Order Component which will manage user authentication and roles

- ## Redux

  **This folder contains redux modules**

  - ### `Actions`
    All redux Actions are declared here
  - ### `Reducers`
    All redux Reducers are declared here
  - ### `Sagas`
    All redux Sagas are declared here

- ## Routes

  The Routing of whole App will manage from here.

- ## Utils

  All the utility functions should declare here.

- ## Views

  All the Views of the App should declare here.
