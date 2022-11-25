import { DropdownList, DropdownListProps } from "./DropdownList";
import { render ,screen, fireEvent} from "@testing-library/react";

const labels = {
  hide: "Hide",
  show: "Show",
};

const data = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
];

const makeSut = (props: Partial<DropdownListProps>) => {
  return render(
    <DropdownList
      data={data}
      labels={labels}
      onRemoveItem={jest.fn()}
      {...props}
    />
  );
};

describe("<DropdownList />", () => {
  test("Should not render ul component on initial render", () => {
    const { container } = makeSut({});

    expect(container.querySelector("ul")).not.toBeInTheDocument();
  });

  /**
   * TODO: Write test case for the following cases
   * Check if list is visible after one click on the button
   * Check if button labels are changing
   * Check if all items have been rendered correctly
   * Check if the remove callback is being called with correct values
   */
  test("Should render ul component when click on button", () => {
    const { container } = makeSut({});
    const button = screen.getByText('Show');
    fireEvent.click(button);
    expect(container.querySelector("ul")).toBeInTheDocument();

  });

  test("Should switch button label on click", () => {});

  test("Should render 3 li correctly", () => {});

  test("Should call onRemoveItem callback correctly", () => {});
});
