library(tidyverse)

data = read_csv("01_pilot/data/02_clean_data.csv")
#head(data)

# RT by scenario
data %>% ggplot(aes(x = scenario, y = RT)) + geom_boxplot()
ggsave("01_pilot/plots/RTscenario.png")

# RT by predicate
data %>% ggplot(aes(x = predicate, y = RT)) + geom_boxplot()
ggsave("01_pilot/plots/RTpredicate.png")

# RT by sentence frame
data %>% ggplot(aes(x = sentence_frame, y = RT)) + geom_boxplot()
ggsave("01_pilot/plots/RTsentence_frame.png")