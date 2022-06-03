import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";


describe('Counter Test' , () => {

    it('should render Counter' , () => {
        render(<Counter/>);

        //두 쿼리 모두 같은 Element 탐색
        screen.getByRole('button' , {name : '+'});
        screen.getByText('+');


        //Action 을 준다.
        const target = screen.getByRole('button' , {name : '+'});

        userEvent.click(target);

        //유효성 검증
        expect(screen.getByText('1')).toBeTruthy();

    });
});