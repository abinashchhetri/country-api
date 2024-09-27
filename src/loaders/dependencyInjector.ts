import { Container } from "typedi";

type dependencyInjectorType = {
  name: string;
  model: unknown;
}[];

export default (props: dependencyInjectorType) => {
  props.forEach(({ name, model }) => {
    Container.set(name, model);
  });
};
