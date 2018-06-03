import 'jsdom-global/register';

import React from "react";
import Enzyme, {mount} from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Demo from "./../Demo";

const validate = (a)=>true;

describe("Test Increment component", ()=>{
    // it("CDM", ()=>{
    //     const CDMSpy = jest.spyOn(Demo.prototype, "componentDidMount");
    //     let wrapper = mount(<Demo lastName={"Pandey"}/>);
    //     expect(CDMSpy).toHaveBeenCalledTimes(1);
    // });

    // it("CWRP", ()=>{
    //     let wrapper = mount(<Demo lastName={"Pandey"}/>);
    //     console.log("s1", wrapper.instance().state);
    //     console.log("p1", wrapper.instance().props);
    //     const CDMSpy = jest.spyOn(wrapper.instance(), "componentWillReceiveProps");
    //     wrapper.setProps({lastName: "Tiwari"});
    //     console.log("s2", wrapper.instance().state);
    //     console.log("p2", wrapper.instance().props);
    //     expect(wrapper.instance().state.name).toEqual("Navin");
    //     expect(CDMSpy).toHaveBeenCalledTimes(1);
    // });

    // it("tests component is mounted", ()=>{
    //     let wrapper = mount(<Demo lastName={"Pandey"}/>);
    //     wrapper.setProps({lastName: "Tiwari"});
    //     expect(wrapper.instance().props.lastName).toEqual("Tiwari");
    //     //expect(initialProps).toEqual(new propFactory());
    // });
});

describe("test handleClick method", ()=>{
    // it("checks if name has been updated to 'Hello'", ()=>{
    //     let wrapper = mount(<Demo lastName={"Pandey"}/>);
    //     const CDMSpy = jest.spyOn(Demo.prototype, "handleClick");
    //     wrapper.find("button").at(0).simulate("click", {preventDefault: ()=>jest.fn()});
    //     expect(CDMSpy).toHaveBeenCalledTimes(1);
    // });

    it("checks if name has been updated to 'Hello'", ()=>{
        let wrapper = mount(<Demo lastName={"Pandey"}/>);
        wrapper.find("button").at(0).simulate("click", {preventDefault: ()=>jest.fn()});
        console.log("state", wrapper.instance().state);
        expect(wrapper.instance().state.name).toEqual("Hello");
    });
});
