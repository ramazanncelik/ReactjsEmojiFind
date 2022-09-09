import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import Header from '../Components/Header/Header'

describe("App Tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Başlk render edildi mi?', () => {
    const headerElement = screen.getByText("Emoji Search");
    expect(headerElement).toBeInTheDocument();
  });

  test("Başlangıçtaki emoji listesi render edildi mi?", () => {
    const items = screen.getAllByText("Click to copy emoji");
    expect(items.length).toEqual(20);
  });

  test("Filtreleme başarılı mı?", () => {
    const emoji = "Grinning";
    const input = screen.getByTitle("FilterInput");
    fireEvent.change(input, { target: { value: emoji } });

    expect(screen.getByText(emoji)).toBeInTheDocument();
  });

  test("Emoji Kopyalama Başarılı mı?", () => {
    const click = screen.getAllByText("Click to copy emoji").at(0);
    const parent = click.parentElement;
    expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(
      0
    );
  });

})