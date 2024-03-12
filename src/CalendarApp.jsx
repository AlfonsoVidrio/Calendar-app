import { store } from "./store";
import  { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const CalendarApp = () => {
  return (
    <Provider store={store}>
          <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </Provider>
  )
}
