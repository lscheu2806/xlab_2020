library(tidyverse)

data = read_csv("02_main/data/02_clean_data.csv")
#head(data)

# RT by scenario
data %>% ggplot(aes(x = scenario, y = RT)) + geom_boxplot()
ggsave("02_main/plots/RTscenario.png")

# RT by predicate
data %>% ggplot(aes(x = predicate, y = RT)) + geom_boxplot()
ggsave("02_main/plots/RTpredicate.png")

# RT by sentence frame
data %>% ggplot(aes(x = sentence_frame, y = RT)) + geom_boxplot()
ggsave("02_main/plots/RTsentence_frame.png")
