require(tidyverse)
require(lme4)

raw <- read_csv("~/Documents/GitHub/graph1/data.csv")


## test trials analysis
test <- raw %>%
  filter(type=="test")  %>%
  group_by(UID, network, condition) %>%
  summarize(prop_correct = mean(correct)) %>%
  spread(network, prop_correct) %>%
  mutate(diff = ME-MC,
         average = (ME+MC)/2)

## proportion correct analysis
test %>%
  t.test(diff ~ condition, .)

## training trials analysis
training <- raw %>%
  filter(type=="training")

## number of blocks to criterion
training %>%
  group_by(UID, network, condition) %>%
  summarize(blocks = max(block)+1) %>%
  spread(network, blocks) %>%
  mutate(diff = ME-MC,
         average = (ME+MC)/2) %>%
  t.test(diff ~ condition, .)

training %>%
  glmer(correct ~ network*condition*block + (1|UID), 
        data=., 
        family = binomial()) 
