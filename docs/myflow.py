from metaflow import FlowSpec, step


class MyFlow(FlowSpec):
    @step
    def start(self):
        self.some_data = ["some", "data"]
        self.next(self.middle)

    @step
    def middle(self):
        self.next(self.end)

    @step
    def end(self):
        pass


if __name__ == "__main__":
    MyFlow()
